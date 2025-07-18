import { Dispatch, SetStateAction } from 'react';

import { CommitteeData, CommitteeMember, ConfData, ConferenceData, ConferenceDataPrevue, ProgCommitteeData } from './types.js';

class StateManager<T> {
	private state: T;
	private setState: Dispatch<SetStateAction<T>>;

	constructor(
		initialState: T,
		setState: Dispatch<SetStateAction<T>>
	) {
		this.state = initialState;
		this.setState = setState;
	}

	getState(): T {
		return this.state;
	}

	updateState(updater: Partial<T> | ((prev: T) => T)) {
		if (typeof updater === 'function') {
		  this.setState(updater);
		} else {
		  this.setState(prev => ({ ...prev, ...updater }));
		}
	}
}

export class CurrentPlace extends StateManager<CurrentPlaceState> {
	private readonly API_URL = 'http://localhost:5000/currentPlace';
	async setCurrentPlace(currentPlace: number ): Promise<void> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({place: currentPlace}),
      });      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status}. ${errorText}`);
      }

      const result = await response.json();
      this.updateState(result);
    } catch (error) {
      console.error('Full error:', error);
      throw error;
    }
  }
}


//_________________________Important Data_______________________________
export class ImportantDataManager extends StateManager<ConferenceData> {
  private readonly API_URL = 'http://localhost:5000/importantData';
	async setYear(year: number ): Promise<void> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({year_data: year}),
      });      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status}. ${errorText}`);
      }

      const result = await response.json();
      this.updateState(result);
    } catch (error) {
      console.error('Full error:', error);
      throw error;
    }
  }
}

//_________________________Preview data__________________________________________
export class PrevueConferenceManager extends StateManager<ConferenceDataPrevue> {
  private readonly API_URL = 'http://localhost:5000/previewData';

  async updatePreviewData(data: { title?: string; description?: string }): Promise<void> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status}. ${errorText}`);
      }

      const result = await response.json();
      this.updateState(result);
    } catch (error) {
      console.error('Full error:', error);
      throw error;
    }
  }
}
//_______________________________________________________________________________



export class ConfDataManager extends StateManager<ConfData> {
	setTitle(title: string) {
		this.updateState({ title });
	}

	setDescription(description: string) {
		this.updateState({ description });
	}
}


export class OrgCommitteeManager extends StateManager<CommitteeData> {
	private readonly coChairsKey = "So-predstaviteli" as const;
  private readonly membersKey = "ComitetMembers" as const;
	
	addCoChair(member: CommitteeMember) {
        this.updateState(prev => ({
            ...prev,
            [this.coChairsKey]: [...prev[this.coChairsKey], member]
        }));
    }

    removeCoChair(index: number) {
        this.updateState(prev => ({
            ...prev,
            [this.coChairsKey]: prev[this.coChairsKey].filter((_, i) => i !== index)
        }));
    }

    addMember(member: CommitteeMember) {
        this.updateState(prev => ({
            ...prev,
            [this.membersKey]: [...prev[this.membersKey], member]
        }));
    }

    removeMember(index: number) {
        this.updateState(prev => ({
            ...prev,
            [this.membersKey]: prev[this.membersKey].filter((_, i) => i !== index)
        }));
    }
}

export class ProgCommitteeManager extends StateManager<ProgCommitteeData> {
	private readonly honoraryChairKey = "ImportantMember" as const;
	private readonly coChairsKey = "So-Predsedatel" as const;
	private readonly deputyChairKey = "PredsedatelSup" as const;
	private readonly membersKey = "CommitteeMember" as const;


  addImportantMember(member: CommitteeMember){
    this.updateState(prev => ({
      ...prev,
      [this.honoraryChairKey]: [...prev[this.honoraryChairKey], member]
    }));
  }
  removeImportantMember(index: number){
    this.updateState(prev => ({
          ...prev,
          [this.honoraryChairKey]: prev[this.honoraryChairKey].filter((_, i) => i !== index)
    }));
  }

  addCoChairsMember(member: CommitteeMember){
    this.updateState(prev => ({
      ...prev,
      [this.coChairsKey]: [...prev[this.coChairsKey], member]
    }));
  }

  removeCoChairsMember(index: number){
    this.updateState(prev => ({
            ...prev,
            [this.coChairsKey]: prev[this.coChairsKey].filter((_, i) => i !== index)
        }));
    }

  addDeputyChairKeyMember(member: CommitteeMember){
    this.updateState(prev => ({
      ...prev,
      [this.deputyChairKey]: [...prev[this.deputyChairKey], member]
    }));
  }
  removeDeputyChairKeyMember(index: number){
    this.updateState(prev => ({
          ...prev,
          [this.deputyChairKey]: prev[this.deputyChairKey].filter((_, i) => i !== index)
    }));
  }

  addMembersKeyMember(member: CommitteeMember){
    this.updateState(prev => ({
      ...prev,
      [this.membersKey]: [...prev[this.membersKey], member]
    }));
  }
  removeMembersKeyMember(index: number){
    this.updateState(prev => ({
          ...prev,
          [this.membersKey]: prev[this.membersKey].filter((_, i) => i !== index)
    }));
  }
}


export interface CurrentPlaceState {
	currentPlace: number;  
}