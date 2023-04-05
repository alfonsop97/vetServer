export {};
const { projects, clients } = require('../sampleData.ts')

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema 
} = require('graphql');

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}   
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: {id: {type: GraphQLID } },
            resolve(parent:any, args:any) {
                return clients.find((client: any) => client.id === args.id);
            } 
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})