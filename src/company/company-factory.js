const Company = require('../../src/company/company');
const Contact = require('../../src/contact/contact');
class CourseFactory {
    /**
     *
     * @param raw
     * @return {Company}
     */
    makeFromDB(raw) {
        let company = new Company(raw.name);
        let contact = new Contact();
        company.setId(raw.id);
        company.setAddress(raw.address);
        contact.setPhone(raw.phoneManager);
        contact.setEmail(raw.emailManager);
        company.setContact(contact);
        company.setNameManager(raw.nameManager);
        return company;
    }
}

module.exports = CourseFactory;