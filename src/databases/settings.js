// export const settingsOptions = settings=> new Promise((resolve,reject) => {
//     Realm.open(databaseOptions).then(realm=>{
//         realm.write(() => {
//             realm.create(SETTINGS_SCHEMA, settings);
//             resolve(settings);
//             realm.close();
//         });
//     }).catch((error) => reject(error));
// });

// export const UpdateSettings = options=> new Promise((resolve,reject) => {
//     Realm.open(databaseOptions).then(realm=>{
//         realm.write(() => {
            
//             let updatingList = realm.objectForPrimaryKey(CONTACT_SCHEMA, options.id);   
//             updatingList.fees = options.fees;  
//             updatingList.wire = options.wire;  
//             updatingList.metric = options.metric;  
//             updatingList.poundounces = options.poundounces;  
//             updatingList.poundgrams = options.poundgrams;  
//             updatingList.ouncesgrams = options.ouncesgrams;  
//             resolve(options);
//             realm.close();
//         });
//     }).catch((error) => reject(error));
// });

// export const settingsschema = {
//     name: SETTINGS_SCHEMA,
//     primaryKey: 'id',
//     properties: {
//         id: "int",
//         fees: { type: 'string', indexed: true, default: 0},
//         wire: { type: 'string', indexed: true, default: 0},
//         metric: { type: 'string', indexed: true, default: 0},
//         poundounces: { type: 'string', indexed: true, default: 0},
//         poundgrams: { type: 'string', indexed: true, default: 0},
//         ouncesgrams: { type: 'string', indexed: true, default: 0},
//     }
// };