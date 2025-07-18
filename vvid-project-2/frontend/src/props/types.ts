import {
	ImportantDataManager,
	PrevueConferenceManager,
	ConfDataManager,
	OrgCommitteeManager,
	ProgCommitteeManager,
	CurrentPlace,
  } from './propManagers';
  

export interface ConferenceData {
	year: number;
}

export interface ConferenceDataPrevue {
	title: string;
	description: string;
}

export interface ConfData {
	title: string;
	description: string;
}

export interface ConferenceContextType {
	importantDataManager: ImportantDataManager;
	prevueConferenceManager: PrevueConferenceManager;
	confDataManager: ConfDataManager;
	committeeManagerOrg: OrgCommitteeManager;
	committeeManagerProg: ProgCommitteeManager;
	currentPlace: CurrentPlace;
}

export interface CommitteeMember {
	name: string;
	affiliation: string;
}

export interface CommitteeData {
	"So-predstaviteli": CommitteeMember[];
	"ComitetMembers": CommitteeMember[];
}

export interface ProgCommitteeData {
	"ImportantMember": CommitteeMember[];
	"So-Predsedatel": CommitteeMember[];
	"PredsedatelSup": CommitteeMember[];
	"CommitteeMember": CommitteeMember[];
}
