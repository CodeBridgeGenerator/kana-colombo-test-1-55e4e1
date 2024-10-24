
    module.exports = function (app) {
        const modelName = 'null';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            fromEmail: { type:  String , lowercase: true },
toEmail: { type:  String , lowercase: true },
subject: { type:  String  },
body: { type:  String  },
time: { type: Date, required: false },
sentStatus: { type: Boolean, required: false },
readStatus: { type: Boolean, required: false },
 },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };