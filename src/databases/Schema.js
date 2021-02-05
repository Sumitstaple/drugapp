import Realm , { ObjectSchema, PropertyType } from 'realm';

export const USER_SCHEMA = "usersData2";
export const CONTACT_SCHEMA = "contacts";
export const SPOT_SCHEMA = "spots";
export const SETTINGS_SCHEMA = "options3";


export const usersschema = {
	name: USER_SCHEMA,
    primaryKey: 'id',
    properties: {
    	id: 'int',
        username: { type: 'string', indexed: true, default: 0 },
        useremail: { type: 'string', indexed: true, default: 0 },
        password: { type: 'string', indexed: true, default: 0 },
        conpassword: { type: 'string', indexed: true, default: 0 },
    }
};

export const contactschema = {
	name: CONTACT_SCHEMA,
    primaryKey: 'id',
    properties: {
    	id: 'int',
        name: { type: 'string', indexed: true, default: 0 },
        image: { type: 'string', indexed: true, default: null },
    }
};
export const spotschema = {
    name: SPOT_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: { type: 'string', indexed: true, default: 0 },
        image: { type: 'string', indexed: true, default: null },
    }
};

export const settingsschema = {
    name: SETTINGS_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: "int",
        fees: { type: 'bool', indexed: true, default: false},
        wire: { type: 'bool', indexed: true, default: false},
        metric: { type: 'bool', indexed: true, default: false},
        poundounces: { type: 'string', indexed: true, default: 0},
        poundgrams: { type: 'string', indexed: true, default: 0},
        ouncesgrams: { type: 'string', indexed: true, default: 0},
    }
};

const databaseOptions = {
	path:'drugApp.realm',
	schema:[usersschema,contactschema,spotschema,settingsschema],
	schemaVersion:1,
}

export const insertNewUser = newusers => new Promise((resolve,reject) => {
	Realm.open(databaseOptions).then(realm=>{
		realm.write(() => {
			// console.log(newusers);
		    realm.create(USER_SCHEMA, newusers);
		    resolve(newusers);
		    // realm.close();
		});
	}).catch((error) => reject(error));
});

export const insertNewContact = newcontact => new Promise((resolve,reject) => {
	Realm.open(databaseOptions).then(realm=>{
		realm.write(() => {
			console.log(newcontact);
		    realm.create(CONTACT_SCHEMA, newcontact);
		    resolve(newcontact);
            // realm.close();
		});
	}).catch((error) => reject(error));
});

export const insertNewSpot = newspot=> new Promise((resolve,reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(() => {
            realm.create(SPOT_SCHEMA, newspot);
            resolve(newspot);
            // realm.close();
        });
    }).catch((error) => reject(error));
});
export const getSpots = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let spots = realm.objects(SPOT_SCHEMA);
        resolve(spots);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export const getContacts = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let contacts = realm.objects(CONTACT_SCHEMA);
        resolve(contacts);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export const filterContactLists = (searchedText) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let filteredLists = realm.objects(CONTACT_SCHEMA)
                                .filtered(`name CONTAINS[c] "${searchedText}"`);//[c] = case insensitive
        resolve(filteredLists);
    }).catch((error) => {
        reject(error);
    });;
});

export const updateContactList = contactList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingList = realm.objectForPrimaryKey(CONTACT_SCHEMA, contactList.id);   
            updatingList.name = contactList.name;    
            resolve();     
        });
    }).catch((error) => reject(error));;
});


export const settingsOptions = settings=> new Promise((resolve,reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(() => {
            realm.create(SETTINGS_SCHEMA, settings);
            resolve(settings);
            // realm.close();
        });
    }).catch((error) => reject(error));
});

export const UpdateSettings = options=> new Promise((resolve,reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(() => {
            let updatingList = realm.objectForPrimaryKey(SETTINGS_SCHEMA, options.id);   
            updatingList.fees = options.fees;  
            updatingList.wire = options.wire;  
            updatingList.metric = options.metric;  
            updatingList.poundounces = options.poundounces;  
            updatingList.poundgrams = options.poundgrams;  
            updatingList.ouncesgrams = options.ouncesgrams;  
            resolve(options);
        });
    }).catch((error) => reject(error));
});

export const getSettings = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let settings = realm.objects(SETTINGS_SCHEMA);
        resolve(settings);  
    }).catch((error) => {        
        reject(error);  
    });;
});

export const getUsers = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let users = realm.objects(USER_SCHEMA);
        resolve(users);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export const checkContact = (name) => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {   
        // console.log(name);     
        let contacts = realm.objects(CONTACT_SCHEMA).filtered('name == "'+name+'"');
        resolve(contacts);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export const checkSpot = (name) => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {   
        // console.log(name);     
        let spots = realm.objects(SPOT_SCHEMA).filtered('name == "'+name+'"');
        resolve(spots);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export default new Realm(databaseOptions);