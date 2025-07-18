import json
import logging
import socket
import requests
from urllib.parse import urlparse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Настройка логирования
logging.basicConfig(level=logging.INFO)

# Обработка запроса на поиск по IP/DNS
class GetRequestIP_DNS(APIView):
    def get(self, request):
        return Response({})
    
    def post(self, request):
        logging.info(f'Полученные данные: {request.data}')
        try:
            request_data = request.data
            answer = Valid_IP_or_DNS().check_request(request_data)
            return Response({"result": answer})
        except Exception as e:
            logging.error(f'Ошибка при обработке POST запроса: {e}')
            return Response({'error': str(e)})

class Get_answer_by_IP:
    @staticmethod
    def get_ip_1(ip):
        try:
            response = requests.get(url=f'http://ipwho.is/{ip}')
            if response.status_code == 200:
                json_response = response.json()
                logging.info(f'Ответ от ipwho.is: {json_response}')
                data1 = {
                    '[IP]': json_response.get('ip'),
                    '[Country]': json_response.get('country'),
                    '[RegionName]': json_response.get('region'),
                    '[City]': json_response.get('city'),
                    '[Lat]': json_response.get('latitude'),
                    '[Lon]': json_response.get('longitude'),
                }
            else:
                logging.error(f'Ошибка от ipwho.is: {response.status_code}')
                data1 = {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}
            return data1
        except Exception as e:
            logging.error(f'Исключение в get_ip_1: {e}')
            return {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}

    @staticmethod
    def get_ip_2(ip):
        try:
            response = requests.get(url=f"https://freeipapi.com/api/json/{ip}")
            if response.status_code == 200:
                json_response = response.json()
                logging.info(f'Ответ от freeipapi.com: {json_response}')
                data2 = {
                    '[IP]': json_response.get('ipAddress'),
                    '[Country]': json_response.get('countryName'),
                    '[RegionName]': json_response.get('regionName'),
                    '[City]': json_response.get('cityName'),
                    '[Lat]': json_response.get('latitude'),
                    '[Lon]': json_response.get('longitude'),
                }
            else:
                logging.error(f'Ошибка от freeipapi.com: {response.status_code}')
                data2 = {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}
            return data2
        except Exception as e:
            logging.error(f'Исключение в get_ip_2: {e}')
            return {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}

    @staticmethod
    def get_ip_3(ip):
        try:
            payload = {'key': 'AC9E4AB50F8585EB2621305D274DA4E3', 'ip': ip, 'format': 'json'}
            response = requests.get(url='https://api.ip2location.io/', params=payload)
            if response.status_code == 200:
                json_response = response.json()
                logging.info(f'Ответ от api.ip2location.io: {json_response}')
                data3 = {
                    '[IP]': json_response.get('ip'),
                    '[Country]': json_response.get('country_name'),
                    '[RegionName]': json_response.get('region_name'),
                    '[City]': json_response.get('city_name'),
                    '[Lat]': json_response.get('latitude'),
                    '[Lon]': json_response.get('longitude'),
                }
            else:
                logging.error(f'Ошибка от api.ip2location.io: {response.status_code}')
                data3 = {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}
            return data3
        except Exception as e:
            logging.error(f'Исключение в get_ip_3: {e}')
            return {'[IP]': '0', '[Country]': '0', '[RegionName]': '0', '[City]': '0', '[Lat]': '0', '[Lon]': '0'}

    @staticmethod
    def get_info_by_ip(ip):
        result_data = {}
        data1 = Get_answer_by_IP.get_ip_1(ip)
        data2 = Get_answer_by_IP.get_ip_2(ip)
        data3 = Get_answer_by_IP.get_ip_3(ip)
        for key in data1:
            result_data[key] = [data1[key], data2[key], data3[key]]
        return result_data

class Valid_IP_or_DNS:
    def check_request(self, req):
        logging.info(f'Начало проверки запроса: {req}')
        ip_address = req.get('ip')
        domain_name = req.get('domain')
        
        if not ip_address and not domain_name:
            logging.error('IP-адрес или доменное имя не предоставлены в запросе.')
            return 'error'

        if ip_address:
            logging.info(f'Запрос содержит IP-адрес: {ip_address}')
            try:
                data = Get_answer_by_IP.get_info_by_ip(ip_address)
                logging.info(f'Полученные данные по IP: {data}')
                return data
            except Exception as e:
                logging.error(f'Ошибка при получении данных по IP: {e}')
                return 'error'
        
        if domain_name:
            logging.info(f'Запрос содержит DNS имя: {domain_name}')
            try:
                ip_by_dns_or_error = self.DNS_or_URL(domain_name)
                if ip_by_dns_or_error == 'error':
                    logging.error('Ошибка DNS имени. Имя не найдено.')
                    return "Error of DNS name. This name not found"
                logging.info(f'IP по DNS имени: {ip_by_dns_or_error}')
                data = Get_answer_by_IP.get_info_by_ip(ip_by_dns_or_error)
                logging.info(f'Полученные данные по DNS: {data}')
                return data
            except Exception as e:
                logging.error(f'Ошибка при обработке DNS: {e}')
                return 'error'

    def DNS_or_URL(self, text):
        logging.info(f'Проверка доменного имени или URL: {text}')
        if urlparse(text).netloc != '':
            text = urlparse(text).netloc
            logging.info(f'Извлеченное доменное имя: {text}')
        else:
            text = "http://" + text
            text = urlparse(text).netloc
            logging.info(f'Извлеченное доменное имя из URL: {text}')

        try:
            ip = socket.gethostbyname(text)
            logging.info(f'IP адрес по доменному имени: {ip}')
            return ip
        except Exception as e:
            logging.error(f'Ошибка при получении IP по доменному имени: {e}')
            return "error"











############################################ [!] Старый код [!] ##############################################
# # Получение данных по IP
# class Get_answer_by_IP(APIView):
#     @staticmethod
#     def get_ip_1(self, ip):
#         try:
#             response = requests.get(url=f'http://ipwho.is/{ip}').json()
#             data1 = {
#             '[IP]': response.get('ip'), # не хвтает континента
#             '[Country]': response.get('country'),
#             '[Region Name]': response.get('region'),
#             '[City]': response.get('city'),
#             '[Lat]': response.get('latitude'), # широта
#             '[Lon]': response.get('longitude'), # долгота
#             }
#             return data1
#         except:
#             data_error = {
#             '[IP]': '0', # не хвтает континента
#             '[Country]': '0',
#             '[Region Name]': '0',
#             '[City]': '0',
#             '[Lat]': '0', # широта
#             '[Lon]': '0', # долгота
#             }
#             return data_error
    

#     # Этот API точнее - показывает улицу
#     @staticmethod
#     def get_ip_2(self, ip):
#         ip = {ip}
#         try:
#             response = requests.get(url=f"https://freeipapi.com/api/json/{ip}").json()
#             data2 = {
#             '[IP]': response.get('ipAddress'), # не хвтает континента
#             '[Country]': response.get('countryName'),
#             '[Region Name]': response.get('regionName'),
#             '[City]': response.get('cityName'),
#             '[Lat]': response.get('latitude'), # широта
#             '[Lon]': response.get('latitude'), # долгота
#             }
#             return data2
#         except:
#             data_error = {
#             '[IP]': '0', # не хвтает континента
#             '[Country]': '0',
#             '[Region Name]': '0',
#             '[City]': '0',
#             '[Lat]': '0', # широта
#             '[Lon]': '0', # долгота
#             }
#             return data_error
    
#     @staticmethod
#     def get_ip_3(self, ip):
#         try:
#             payload = {'key': 'AC9E4AB50F8585EB2621305D274DA4E3', 'ip': ip, 'format': 'json'}
#             response = requests.get(url=f'https://api.ip2location.io/', params = payload).json()
#             data3 = {
#             '[IP]': response.get('ip'), # не хвтает континента
#             '[Country]': response.get('country_name'),
#             '[Region Name]': response.get('region_name'),
#             '[City]': response.get('city_name'),
#             '[Lat]': response.get('latitude'), # широта
#             '[Lon]': response.get('longitude'), # долгота
#             }
#             return data3
#         except:
#             data_error = {
#             '[IP]': '0', # не хвтает континента
#             '[Country]': '0',
#             '[Region Name]': '0',
#             '[City]': '0',
#             '[Lat]': '0', # широта
#             '[Lon]': '0', # долгота
#             }
#             return data_error
    
#     @classmethod
#     def get_info_by_ip(self, ip):
#         result_data = {}
#         data1 = data1.get_ip_1(ip)
#         data2 = data2.get_ip_2(ip)
#         data3 = data3.get_ip_3(ip)
#         for key in data1:
#             result_data[key] = []
#             result_data[key].append(data1[key])
#             result_data[key].append(data2[key])
#             result_data[key].append(data3[key])
#         return result_data

# # Проверка валидности IP или DNS
# class Valid_IP_or_DNS(APIView):
#     def check_request(req):
#         if(req[0].isdigit()):
#             data = Get_answer_by_IP().get_info_by_ip(req)
#             return data
#         else:
#             try:
#                 req = urlparse(req).netloc  # Удалить https// и всё остальное в ссылке кроме доменного имени
#                 ip_by_dns = socket.gethostbyname(req) # Получаем IP по доменному имени
#                 data = Get_answer_by_IP().get_info_by_ip(ip_by_dns)
#                 return data
#             except socket.gaierror as error: # Переделать в возврат результата "NOT FOUND"
#                 print(f'[!] Invalid Hostname [!] - {error}')

# # Получение или отдача запроса/результата
# class IP_or_DNS_informathion(APIView):
#     def get(self, request):
#         return Response({})
    
#     def post(self, request):
#         try:
#             answer = Valid_IP_or_DNS().check_request(request)
#             return Response({answer})
#         except:
#             return Response({'Ошибка кода в функции "post" класса "IP_or_DNS_informathion"'})








###############################################################################################################################################################
# class YouTubeVideoView(APIView):
#     def get(self, request):
#         output = [
#             {
#                 "title": output.title,
#                 "channel": output.channel
#             } for output in YouTubeVideo.objects.all()
#         ]
#         return Response(output)
#     def post(self, request):
#         serializer = YouTubeVideoSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

