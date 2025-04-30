const widgetQuestions = async (req, res, next) => {
    try {
      const questions = [
        {
          question: "How would you rate our service?",
          type: "rating",
          options: [1, 2, 3, 4, 5], // clearer than repeating keys
        },
        {
          question: "What can we improve?",
          type: "text",
        },
        {
            question: "What services did you use?",
            type: "checkbox",
            options: ["Staffing", "Development", "Consulting"]
          },
          {
            question: "Would you recommend us?",
            type: "yesno",
            options: ["Yes", "No", "Maybe"], // clearer than repeating keys

          }        
          
      ];
  
      req.widget_review_questions = questions;
      next();
    } catch (error) {
      console.error(error);
      req.widget_review_questions = [];
      next();
    }
  };
  
  module.exports = widgetQuestions;
  