const mongoose = require('mongoose');

// Define the schema for the app
const AppSchema = new mongoose.Schema({
  appName: {
    type: String,
    required: true
  },
  roles: {
    type: String, // If it's a string with comma-separated roles or a list of roles, you may want to adjust this accordingly.
    required: true
  },
  
  frequency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'frequency' }],

  status: {
    type: String,
    required: true
  },
  next_audit_date: {
    type: Date, // You can store this as a Date to handle date and time.
    required: true
  },
  last_audit_date: {
    type: Date, // You can store this as a Date to handle date and time.
    required: true
  },
  desc: {
    type: String,
    required: false // Assuming description is optional.
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  app_rights:{
    type:[String],
    required: true // Assuming description is optional.
  },
  
  error: {
    type: String,
    default: null // Assuming error is a string, but could be adjusted based on your error handling.
  },
   created_at: { 
    type: Date, default: Date.now
   }, 
  updated_at: {
     type: Date, default: Date.now 
    }, 
  deleted_at: {
     type: Date, default: null 
    }, 
  status: {
     type: Boolean, default: true
     } 
});

// Create and export the model
const App = mongoose.model('App', AppSchema);

module.exports = App;
