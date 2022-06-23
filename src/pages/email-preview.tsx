/* eslint-disable @typescript-eslint/no-unused-vars */
import DirectLoginTemplate from '@/pods/emails/templates/DirectLoginTemplate';
import NewUserTemplate from '@/pods/emails/templates/NewUserTemplate';

const DirectLoginTemplatePreview = () => (
  <DirectLoginTemplate name="Roberto" url="http://localhost:3000" />
);

const NewUserTemplatePreview = () => (
  <NewUserTemplate
    name="Roberto"
    surname="Rios"
    alias="MKT00011"
    email="roberto.rios.perea@gmail.com"
    password="password"
    phone="+34 661847127"
  />
);

export default NewUserTemplatePreview;
