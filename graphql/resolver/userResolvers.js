const { administratorDetails } = require("../../controller/administratorController");
const authMiddleware  = require("../../middleware/authMiddleware")
const applyMiddleware = require("../../middleware/middlewareHandler")

const userResolvers = {
    Query : {
        getUser : async (parent, args, context) =>{
            const {req, res} = context

            // await applyMiddleware(req, res, [authMiddleware.isAuthenticatedAdministrator, authMiddleware.isAdministratorVerified]);
            return administratorDetails()
        },
        getUserById: async (parent, { id }, context) => {
            const { req, res } = context;
            // await applyMiddleware(req, res, [authMiddleware.isAuthenticatedAdministrator, authMiddleware.isAdministratorVerified]);
            return administratorDetails(id);
        }

    }
}

module.exports = userResolvers