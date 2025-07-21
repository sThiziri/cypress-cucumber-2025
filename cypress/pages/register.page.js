/// <reference types="cypress" />

class RegisterPage{
    elements = {
        firstName : () => cy.get(".id_first_name"),
        lastName : () => cy.get(".id_last_name"),
        email : () => cy.get(".id_email"),
        genreIndex : () => cy.get('#div_id_gender input[type="radio"]').eq(index),
        genreMale : () => cy.get(".id_gender_1"),
        genreFemale : () => cy.get(".id_gender_2"),
        genreOther : () => cy.get(".id_gender_3"),
        phoneNumber : () => cy.get(".id_phone_number"),
        subject : () => cy.get(".id_subject"),
        getGenderRadioByIndex : (index) =>  cy.get('#div_id_gender input[type="radio"]').eq(index)
};

  saisirFirstName(firstName){
    this.elements.firstName().clear().type(firstName);
  }

  saisirLastName(lastName){
    this.elements.lastName().clear().type(lastName);
  }

  saisirEmail(email){
    this.elements.email().clear().type(email);
  }

  selectGenre(indexGenre){
    getGenderRadioByIndex(indexGenre).check({ force: true });
  }

  saisirPhoneNumber(number){
    this.elements.phoneNumber().clear().type(number);
  }

  saisirSubject(subject){
    this.elements.phoneNumber().clear().type(subject);
  }

}