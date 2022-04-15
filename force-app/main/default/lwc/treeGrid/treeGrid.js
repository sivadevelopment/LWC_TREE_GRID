import { LightningElement, wire } from 'lwc';
import getAccountWithContacts from '@salesforce/apex/AcountContact.getAccountWithContacts';

export default class TreeGrid extends LightningElement {
    
    gridData=[]

    @wire(getAccountWithContacts)
    wiredData({ error, data }) {
       if(data){
        console.log(data)
        this.formatGridData(data)
       }else if(error){
         console.log(error);
           }
     
    }

    /* column */
    gridColumns=[
        {
            label:'Name',
            fieldName:'Name',
            type:'text'
        },

         {
            label:'Phone',
            fieldName:'Phone',
            type:'text'
        },

         {
            label:'Account Website',
            fieldName:'Website',
            type:'url',
            typeAttributes:{
                target:'_blank'
            }
        }
    ]

    dummyData=[
        {
            Name:'Siva',
            Phone:'12'
        },
         {
            Name:'Srivalli',
            Phone:'13'
        }
    ]

formatGridData(data){
   this.gridData= data.map(item=>{
        const {Contacts, ...accounts}=item;
        
        const updateContacts=Contacts.map(con=>{
            return {...con, "_children":this.dummyData}
        })

        return {...accounts, "_children":updateContacts}
    })
    console.log( this.gridData)
}


}