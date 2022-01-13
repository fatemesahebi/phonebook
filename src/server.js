import {createServer, Model, Response} from "miragejs";
import {contactList} from "./componenets/index";
import avatar8 from "./images/kisspng-user-logo-information-service-design-5ba34f88e63387.4679724515374293849429.png";
export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,
        models: {
            contact: Model,

        },
        seeds(server) {
            contactList.map(contact=>server.create("contact",contact))
        },
        routes() {
            this.namespace = "api";
            this.get("/contacts", (schema) => {
                return schema.contacts.all();
            })
            this.post('/contacts',(schema,req)=>{
           const data=JSON.parse(req.requestBody)
                if(data.name==='' || data.phoneNumber==='') return new Response(400)
             let contact= schema.contacts.create({
                    name: data.name,
                    phoneNumber:data.phoneNumber,
                    group: data.group,
                    note: data.note,
                    photo: data.photo,
                    email: data.email,
                    id:data.id,
                    callInfo:data.callInfo
                })
                return contact
            })
            this.get('/contacts/:id', (schema,req)=>{
                return schema.contacts.find(req.params.id)
            })
            this.put('/contacts/:id',(schema,req)=>{
            const data=JSON.parse(req.requestBody)
                const contact=schema.contacts.find(req.params.id)
                    contact.update={
                        name: data.name,
                        phoneNumber:data.phoneNumber,
                        group: data.group,
                        note: data.note,
                        photo: data.photo,
                        email: data.email,
                        id:data.id,
                        callInfo:data.callInfo
                }
                return contact
            })

        },
    });

    return server;
}