import { FC, useContext } from 'react';
import { ConferenceContext } from '@/providers/ConferenceData';
import AdminPrevueForm from '@/adminComponents/Prevue/Prevue';
import AdminImportantForm from '@/adminComponents/ImportantInf/Important';
import Conf from '@/adminComponents/Conf/Conf';
import { DataManager } from '@/props/dataManager';
import { CurrentPlace, OrgCommitteeManager, ProgCommitteeManager } from '@/props/propManagers';
import { CommitteeMember } from '@/props/types';
import AdminOrgCom from '@/adminComponents/Orgcom/Orgcom';
import CurrentPlaceChoose from '@/adminComponents/ChooseCurrentPlace/CurrentPlace';
import AdminProgCom from '@/adminComponents/ProgramCom/ProgramCom'

const AdminPage: FC = () => {
    const {
        importantDataManager,
        prevueConferenceManager,
        confDataManager,
        committeeManagerOrg,
        committeeManagerProg,
        currentPlace,
    } = useContext(ConferenceContext)!;
    const dataManager = new DataManager(
        importantDataManager,
        prevueConferenceManager,
        confDataManager,
        committeeManagerOrg,
        committeeManagerProg,
        currentPlace,
    );

    const handleImportantSave = (year: number) => {
        dataManager.saveImportantData(year);
    };

    const handleConfSave = (title: string, description: string) => {
        dataManager.saveConfData(title, description);
    };

    const handlePlaceSave = (currentPlace: number) => {
        dataManager.savePlaceData(currentPlace);
    };

    const { title, description } = prevueConferenceManager.getState();

    return (
        <section>
            <h1>Admin Page</h1>
            <p>Welcome to the admin page!</p>
            <AdminImportantForm
                initialYear={importantDataManager.getState().year}
                onSave={handleImportantSave}
            />
            <AdminPrevueForm
                initialTitle={title}
                initialDescription={description}
                onSave={(newTitle, newDescription) => {
                    prevueConferenceManager.updatePreviewData({ title: newTitle, description: newDescription });
                }}
            />
            <CurrentPlaceChoose 
                initialChoose={currentPlace.getState().currentPlace}
                onSave={handlePlaceSave}
            />
            <Conf
                initialTitle={confDataManager.getState().title}
                initialDescription={confDataManager.getState().description}
                onSave={handleConfSave}
            />
            <AdminOrgCom
                coChairs={committeeManagerOrg.getState()['So-predstaviteli'] || []}
                members={committeeManagerOrg.getState().ComitetMembers || []}
                onAddCoChair={(member: CommitteeMember) =>
                    committeeManagerOrg.addCoChair(member)
                }
                onRemoveCoChair={(index: number) =>
                    committeeManagerOrg.removeCoChair(index)
                }
                onAddMember={(member: CommitteeMember) =>
                    committeeManagerOrg.addMember(member)
                }
                onRemoveMember={(index: number) =>
                    committeeManagerOrg.removeMember(index)
                }
            />
            <AdminProgCom
                honoraryChair={committeeManagerProg.getState().ImportantMember || []}
                coChairs={committeeManagerProg.getState()['So-Predsedatel'] || []}
                members={committeeManagerProg.getState().CommitteeMember || []}
                deputyChair={committeeManagerProg.getState().PredsedatelSup || []}
                onAddImportantMember={(member: CommitteeMember) =>
                    committeeManagerProg.addImportantMember(member)
                }
                onRemoveImportantMember={(index: number) =>
                    committeeManagerProg.removeImportantMember(index)
                }
                onAddCoChair={(member: CommitteeMember) =>
                    committeeManagerProg.addCoChairsMember(member)
                }
                onRemoveCoChair={(index: number) =>
                    committeeManagerProg.removeCoChairsMember(index)
                }
                onAddMember={(member: CommitteeMember) =>
                    committeeManagerProg.addMembersKeyMember(member)
                }
                onRemoveMember={(index: number) =>
                    committeeManagerProg.removeMembersKeyMember(index)
                }
                onAddDeputyChairMember={(member: CommitteeMember) =>
                    committeeManagerProg.addDeputyChairKeyMember(member)
                }
                onRemoveDeputyChairMember={(index: number) =>
                    committeeManagerProg.removeDeputyChairKeyMember(index)
                }
            />
        </section>
    );
};

export default AdminPage;