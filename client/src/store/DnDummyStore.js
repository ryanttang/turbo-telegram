class Store {
  


  lanes = [
    {
      "id": "EMPLOYEES",
      "title": "Empoloyees",
      "label": "30/30",
      "style": { "width": 380 },
      "cards": [
        {
          "id": "Employee_1",
          "title": "ID#0001",
          "label": "Housekeeping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "body": "1:00PM - 2:30PM",
          "description": "Philip Carrot"
        },
        {
          "id": "Employee_2",
          "title": "ID#0002",
          "label": "Landscaping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Sammy Stirfry"
        },
        {
          "id": "Employee_3",
          "title": "ID#0003",
          "label": "Housekeeping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Lilly Ketchup"
        },
        {
          "id": "Employee_4",
          "title": "ID#0004",
          "label": "Housekeeping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "George Quinoa"
        }
      ]
    },
    {
      "id": "PROPERTIES_1",
      "title": "Green Property",
      "label": "ID#01",
      "style": { "width": 380 },
      "cards": [
        {
          "id": "Employee_5",
          "title": "ID#0005",
          "label": "Landscaping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Susie Mayo"
        }
      ]
    },
    {
      "id": "PROPERTIES_2",
      "title": "Blue Property",
      "label": "ID#02",
      "style": { "width": 380 },
      "cards": [
        {
          "id": "Employee_7",
          "title": "ID#0007",
          "label": "Housekeeping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Hubert Cranberry"
        }
      ]
    },
    {
      "id": "PROPERTIES_3",
      "title": "Orange Property",
      "style": { "width": 380 },
      "label": "ID#03",
      "cards": [
        {
          "id": "Employee_6",
          "title": "ID#0006",
          "label": "Interior Decorating",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Rosey Ham"
        }
      ]
    },
    {
      "id": "PROPERTIES_4",
      "title": "Purple Property",
      "style": { "width": 380 },
      "label": "ID#04",
      "cards": [
        {
          "id": "Employee_8",
          "title": "ID#0008",
          "label": "Housekeeping",
          "cardStyle": { "width": 370, "maxWidth": 370, "margin": "auto", "marginBottom": 5 },
          "description": "Jill Pizza"
        }
      ]
    }
  ]
}

const DnDummyStore = new Store();

export default DnDummyStore;