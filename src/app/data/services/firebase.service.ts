import firebase from 'firebase/app';
import 'firebase/firestore';
import { Guid } from "guid-typescript";
import { Injectable } from '@angular/core';
import { SubmitedCampaigns } from '@schema/question-answer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
  }


  getQuestions() {
    return firebase.firestore().collection('question').get()
  }

  addOrganization(value) {
  	return firebase.firestore().collection('organizations').add({name: value})
  }

  addSubmitedCampaign(campaign: SubmitedCampaigns) {
  	return firebase.firestore().collection('submitedCampaigns').add(campaign)
  }

  generateGUID () {
  	return Guid.create().toString()
  }
}
