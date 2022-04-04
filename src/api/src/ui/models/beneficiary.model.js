'use strict';

const BeneficiaryModel = function (beneficiary) {
  this.id = beneficiary.id;
  this.firstName = beneficiary.firstName;
  this.lastName = beneficiary.lastName;
  this.description = beneficiary.description;
};

module.exports = BeneficiaryModel;