import {
    ImportantDataManager,
    PrevueConferenceManager,
    ConfDataManager,
    OrgCommitteeManager,
    ProgCommitteeManager,
    CurrentPlace,
} from './propManagers';
import { CommitteeMember } from './types';

export class DataManager {
    constructor(
        private importantDataManager: ImportantDataManager,
        private prevueConferenceManager: PrevueConferenceManager,
        private confDataManager: ConfDataManager,
        private committeeManagerOrg: OrgCommitteeManager,
        private committeeManagerProg: ProgCommitteeManager,
        private currentPlace: CurrentPlace,
    ) {}

    saveImportantData(year: number) {
        this.importantDataManager.setYear(year)
        .catch(error => {
            console.error('Save failed:', error);
        });
    }

    savePlaceData(currentPlace: number) {
        this.currentPlace.setCurrentPlace(currentPlace)
        .catch(error => {
            console.error('Save failed:', error);
        });
    }

    savePrevueData(title: string, description: string) {
        this.prevueConferenceManager.updatePreviewData({ title, description })
        .catch(error => {
            console.error('Save failed:', error);
        });
    }

    saveConfData(title: string, description: string) {
        this.confDataManager.setTitle(title);
        this.confDataManager.setDescription(description);
    }

    addCoChairOrg(member: CommitteeMember) {
        this.committeeManagerOrg.addCoChair(member);
    }

    removeCoChairOrg(index: number) {
        this.committeeManagerOrg.removeCoChair(index);
    }

    addMemberOrg(member: CommitteeMember) {
        this.committeeManagerOrg.addMember(member);
    }

    removeMemberOrg(index: number) {
        this.committeeManagerOrg.removeMember(index);
    }

    // Prog Committee methods
    addImportantMemberProg(member: CommitteeMember) {
        this.committeeManagerProg.addImportantMember(member);
    }

    removeImportantMemberProg(index: number) {
        this.committeeManagerProg.removeImportantMember(index);
    }

    addCoChairProg(member: CommitteeMember) {
        this.committeeManagerProg.addCoChairsMember(member);
    }

    removeCoChairProg(index: number) {
        this.committeeManagerProg.removeCoChairsMember(index);
    }

    addMemberProg(member: CommitteeMember) {
        this.committeeManagerProg.addMembersKeyMember(member);
    }

    removeMemberProg(index: number) {
        this.committeeManagerProg.removeMembersKeyMember(index);
    }

    addDeputyChairProg(member: CommitteeMember) {
        this.committeeManagerProg.addDeputyChairKeyMember(member);
    }

    removeDeputyChairProg(index: number) {
        this.committeeManagerProg.removeDeputyChairKeyMember(index);
    }
}