import { FC, useState } from "react";
import "../standartStyles.pcss"

interface ICurrentPlace {
    initialChoose: number;
    onSave: (currentPlace: number) => void;
}

const CurrentPlaceChoose: FC<ICurrentPlace> = ({initialChoose, onSave}) => {
    const [curChoose, setCurrentPlace] = useState(initialChoose);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPlace(Number(e.target.value));
    };
    
    const handleSave = () => {
        onSave(curChoose);
    };
    
    return(
        <div className="main-section">
            <div className="section-title">Выбор локации конференции</div>
            
            <div className="form-group">
                <h3>Выберите город проведения:</h3>
                
                <div className="radio-group">
                    <label className="group-label">
                        <input
                            type="radio"
                            name="location"
                            value="1"
                            checked={curChoose === 1}
                            onChange={handleChange}
                        />
                        Таганрог
                    </label>
                    
                    <label className="group-label">
                        <input
                            type="radio"
                            name="location"
                            value="2"
                            checked={curChoose === 2}
                            onChange={handleChange}
                        />
                        Геленджик
                    </label>
                </div>
            </div>
            
            <button className="save-button" onClick={handleSave}>
                Сохранить
            </button>
        </div>
    );
}

export default CurrentPlaceChoose;