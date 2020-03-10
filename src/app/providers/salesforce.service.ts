import { Injectable } from '@angular/core';
import { UserData } from './user-data';

const URL_API = 'http://183.91.11.56:3002/v1/';
const URL_LIST_USERS = '/api/users';
const URL_LIST_TASKS = '/api/tasks';
const URL_LIST_ACCOUNT = 'account/list';
const URL_LIST_OPP_STAGES = 'opportunity/listStage';
const URL_DEL_OPPORTUNITY = 'opportunity';
const URL_GET = 'opportunity';
const URL_GET_TASK = '/api/task';
const URL_GET_USER = '/api/user';
const URL_SAVE_OPPORTUNITY = 'opportunity';
const URL_NEW_OPPORTUNITY = 'opportunity/create';

@Injectable({
  providedIn: 'root'
})
export class SalesforceService {
  
  constructor(
    public userData: UserData
  ) { }

  getUsers() {
    return this.userData.getWithToken(URL_API + URL_LIST_USERS);
  }

  getTasks() {
    return this.userData.getWithToken(URL_API + URL_LIST_TASKS, null);
  }

  getOpportunities() {
    return this.userData.getWithToken(URL_API + 'opportunity/list?f=Business_Unit__r.Id,Business_Unit__r.Name,CreatedBy.Name,LastModifiedBy.Name,Owner.Title,Owner.CompanyName,Owner.Name,Account.Phone,Account.Type,Account.Website,Account.Name,AccountId,Account_Manager__c,Account_Manager__r.Id,Account_Manager__r.Name,Alert_from_BD_to_AM__c,Alert_from_BOM_to_AM__c,Alert_from_BUD_to_AM__c,Amount,Auto_close_all_task__c,Bid_Close_Date__c,Bid_Open_Date__c,Business_Unit__c,Calculate_Last_Activity__c,CloseDate,CreatedById,CreatedDate,DB_Competitor__c,Description,ExpectedRevenue,Expected_Profit__c,Fiscal,FiscalQuarter,FiscalYear,Fiscal_Year__c,ForecastCategory,ForecastCategoryName,Forecast_Category__c,HasOpenActivity,HasOpportunityLineItem,HasOverdueTask,Id,IsClosed,IsDeleted,IsWon,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Last_modified_by_User__c,LeadSource,MVV__c,Name,NextStep,OwnerId,Pricebook2Id,Probability,Ready_for_closing__c,Recognize_Date__c,RecordTypeId,Responsible_Person__c,Sales_Reps__c,Sales_Reps__r.Id,Sales_Reps__r.Name,StageName,SyncedQuoteId,SystemModstamp,Total_Document__c,Type,Responsible_Person__r.Name,Loss_Reason__c', null);
  }

  getLeads() {
    return this.userData.getWithToken(URL_API + 'lead/list', null);
  }

  getAccounts() {
    return this.userData.getWithToken(URL_API + URL_LIST_ACCOUNT);
  }

  getOpportunityStages() {
    return this.userData.getWithToken(URL_API + URL_LIST_OPP_STAGES);
  }

  getDescriptions(object) {
    return this.userData.getWithToken(URL_API + 'service/sobjects/' + object + '/describe');
  }

  getOpportunity(opportunityId) {
    return this.userData.getWithToken(URL_API + URL_GET + '/' + opportunityId, null);
  }

  getLead(leadId) {
    return this.userData.getWithToken(URL_API + 'lead/' + leadId, null);
  }
  
  getTask(taskId) {
    return this.userData.getWithToken(URL_API + URL_GET_TASK + '/' + taskId, null);
  }
    

  getUser(id) {
    return this.userData.getWithToken(URL_API + URL_GET_USER + '/' + id, null);
  }

  saveOpportunity(opportunity) {
    const clonedOpportunity = JSON.parse(JSON.stringify(opportunity));
    const id = clonedOpportunity.Id;
    delete clonedOpportunity.Id;
    return this.userData.patchWithToken(URL_API + URL_SAVE_OPPORTUNITY + '/' + id, clonedOpportunity);
  } 

  saveLead(lead) {
    const cloned = JSON.parse(JSON.stringify(lead));
    const id = cloned.Id;
    const arrFieldsToDelete = ['LastModifiedDate', 'Address', 'Name', 'CreatedById', 'PhotoUrl', 'ConvertedOpportunityId', 'MasterRecordId', 'IsDeleted', 'ConvertedAccountId', 'IsConverted', 'LastViewedDate', 'eContacts__Location__c', 'DB_Lead_Age__c', 'CreatedDate', 'ConvertedDate', 'LastReferencedDate', 'ConvertedContactId', 'DB_Created_Date_without_Time__c', 'SystemModstamp', 'LastActivityDate', 'LastModifiedById', 'JigsawContactId'];
    delete cloned.Id;
    for (const field of arrFieldsToDelete) {
      delete cloned[field]; 
    }
    return this.userData.patchWithToken(URL_API + 'lead/' + id, cloned);
  } 

  deleleteOpportunity(opportunity) {
    const id = opportunity.Id;
    return this.userData.deleteWithToken(URL_API + URL_DEL_OPPORTUNITY + '/' + id);
  }

  deleleteLead(lead) {
    const id = lead.Id;
    return this.userData.deleteWithToken(URL_API + 'lead/' + id);
  }

  newOpportunity(opportunity) {
    return this.userData.postWithToken(URL_API + URL_NEW_OPPORTUNITY, opportunity);
  }

  newLead(lead) {
    return this.userData.postWithToken(URL_API + 'lead/create', lead);
  }

  async getPickListValues(object) {
    let pickListValues = {};
    const result = await this.getDescriptions(object);
    const fields = result 
        && result.body 
        && result.body.fields
        ? result.body.fields
        : null;
    if (!fields || !fields.length) {
      return pickListValues;
    }
    for (let field of fields) {
      if (field && field.picklistValues) {
        pickListValues[field.name] = field.picklistValues;
      }
    }
    return pickListValues;
  }
}
