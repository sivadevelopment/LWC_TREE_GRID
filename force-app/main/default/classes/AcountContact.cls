/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-15-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AcountContact {
   

 @AuraEnabled(cacheable=true)
public  static List<Account> getAccountWithContacts() {
  List<Account> accounts=[select Id, Name, Phone, WebSite, (SELECT Name, Phone, FirstName, LastName from contacts) from Account LIMIT 5];
  return accounts;   
}
    
}
