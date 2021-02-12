// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace contact {
        namespace main {
          namespace Contact {
            type Form = Xrm.FormContext & {
              getAttribute(
                attributename: "fullname"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "jobtitle"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "mobilephone"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "fax"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_composite"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "gendercode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "familystatuscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "spousesname"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "birthdate"
              ): Xrm.Attributes.DateAttribute;
              getAttribute(
                attributename: "anniversary"
              ): Xrm.Attributes.DateAttribute;
              getAttribute(
                attributename: "description"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "originatingleadid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "lastusedincampaign"
              ): Xrm.Attributes.DateAttribute;
              getAttribute(
                attributename: "donotsendmm"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotphone"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotfax"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "creditlimit"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "fullname"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "jobtitle"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              getControl(
                controlname: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "mobilephone"
              ): Xrm.Attributes.StringAttribute;
              getControl(controlname: "fax"): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "address1_composite"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "gendercode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "familystatuscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "spousesname"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "birthdate"
              ): Xrm.Attributes.DateAttribute;
              getControl(
                controlname: "anniversary"
              ): Xrm.Attributes.DateAttribute;
              getControl(
                controlname: "description"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "originatingleadid"
              ): Xrm.Attributes.LookupAttribute;
              getControl(
                controlname: "lastusedincampaign"
              ): Xrm.Attributes.DateAttribute;
              getControl(
                controlname: "donotsendmm"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "donotemail"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "donotphone"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "donotfax"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              getControl(
                controlname: "creditlimit"
              ): Xrm.Attributes.NumberAttribute;
              getControl(
                controlname: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              getControl(
                controlname: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(
                controlname: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;

              ui: Xrm.Ui & {
                tabs: Tabs;

                controls: UiControls;
              };

              data: Xrm.Data & {
                attributes: DataAttributes;
              };
            };
            type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
              get(
                tabname: "SUMMARY_TAB"
              ): Xrm.Controls.Tab & {
                sections: SUMMARY_TABSections;
              };
              get(
                tabname: "DETAILS_TAB"
              ): Xrm.Controls.Tab & {
                sections: DETAILS_TABSections;
              };
              get(
                tabname: "documents_sharepoint"
              ): Xrm.Controls.Tab & {
                sections: documents_sharepointSections;
              };
            };

            type SUMMARY_TABSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "CONTACT_INFORMATION"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABCONTACT_INFORMATIONControls;
              };
              get(
                sectionname: "MapSection"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABMapSectionControls;
              };
              get(
                sectionname: "BusinessCard"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABBusinessCardControls;
              };
              get(
                sectionname: "SOCIAL_PANE_TAB"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABSOCIAL_PANE_TABControls;
              };
              get(
                sectionname: "TalkingPoints_section"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABTalkingPoints_sectionControls;
              };
              get(
                sectionname: "Summary_section_6"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABSummary_section_6Controls;
              };
              get(
                sectionname: "CUSTOMER_DETAILS_TAB"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABCUSTOMER_DETAILS_TABControls;
              };
            };
            type DETAILS_TABSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "PERSONAL INFORMATION"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABPERSONALINFORMATIONControls;
              };
              get(
                sectionname: "PERSONAL_NOTES_SECTION"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABPERSONAL_NOTES_SECTIONControls;
              };
              get(
                sectionname: "marketing information"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABmarketinginformationControls;
              };
              get(
                sectionname: "CONTACT_PREFERENCES"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABCONTACT_PREFERENCESControls;
              };
              get(
                sectionname: "billing information"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABbillinginformationControls;
              };
              get(
                sectionname: "shipping information"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABshippinginformationControls;
              };
            };
            type documents_sharepointSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "documents_sharepoint_section"
              ): Xrm.Controls.Section & {
                controls: documents_sharepointdocuments_sharepoint_sectionControls;
              };
            };
            type SUMMARY_TABCONTACT_INFORMATIONControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "fullname"): Xrm.Controls.StringControl;
              get(controlname: "jobtitle"): Xrm.Controls.StringControl;
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "mobilephone"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_composite"
              ): Xrm.Controls.StringControl;
            };
            type SUMMARY_TABMapSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {};
            type SUMMARY_TABBusinessCardControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "businesscard"): Xrm.Controls.StringControl;
            };
            type SUMMARY_TABSOCIAL_PANE_TABControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {};
            type SUMMARY_TABTalkingPoints_sectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {};
            type SUMMARY_TABSummary_section_6Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {};
            type SUMMARY_TABCUSTOMER_DETAILS_TABControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
            };
            type DETAILS_TABPERSONALINFORMATIONControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "familystatuscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "spousesname"): Xrm.Controls.StringControl;
              get(controlname: "birthdate"): Xrm.Controls.DateControl;
              get(controlname: "anniversary"): Xrm.Controls.DateControl;
            };
            type DETAILS_TABPERSONAL_NOTES_SECTIONControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "description"): Xrm.Controls.StringControl;
            };
            type DETAILS_TABmarketinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABCONTACT_PREFERENCESControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABbillinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABshippinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type documents_sharepointdocuments_sharepoint_sectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {};
            type UiControls = Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {
              get(controlname: "fullname"): Xrm.Controls.StringControl;
              get(controlname: "jobtitle"): Xrm.Controls.StringControl;
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "mobilephone"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_composite"
              ): Xrm.Controls.StringControl;
              get(controlname: "businesscard"): Xrm.Controls.StringControl;
              get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "familystatuscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "spousesname"): Xrm.Controls.StringControl;
              get(controlname: "birthdate"): Xrm.Controls.DateControl;
              get(controlname: "anniversary"): Xrm.Controls.DateControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
              get(attributename: "fullname"): Xrm.Attributes.StringAttribute;
              get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
              get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
              get(attributename: "fax"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_composite"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "gendercode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "familystatuscode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "spousesname"): Xrm.Attributes.StringAttribute;
              get(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
              get(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
              get(attributename: "description"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "originatingleadid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "lastusedincampaign"
              ): Xrm.Attributes.DateAttribute;
              get(
                attributename: "donotsendmm"
              ): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
            };
          }
        }
      }
    }
  }
}
