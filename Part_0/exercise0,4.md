[![](https://mermaid.ink/img/pako:eNq9VE1v2zAM_SuEzolTBGsPPvS0YsPQLzS51UPByHSsxZZUiUpaBPnvo2O3QFsMaLqtPlmPNN_jM6mt0q4klatI94mspq8GlwHbwoI8HgMbbTxahkVwm0jhbUDAdYf3kSFtfHra4zlcX83mUDP7mE8mkVNpKGY6ZjU10diVySozoQdsfUPo_cTS5s46pr4cajZrZHpm6cD-fSwcA1sONxS9s5FgY7gGrgle1JR6ERqnkY0bhJb0pvafOvh2dlADHdlh6r_PL86hdDq1xP9ZXYvGSvhAgZ2h8hFUpqHPEPjrA_p-4BpnOhjP75F5KX8JglnWDK6C50JzKTQcILJMeQR6IJ3Y2OVrlm5zBEPhI9a1TNg-YXZ1CVVw7f70b70pkVG8eRrh97pzu4VC9twyWS5ULof9wBnpDeNjoUaCSGnqY9Oj6Zfx0cl4elwo2I0gyzL4-fdu9jYOJmlsmgXqFVTJ6m4nex8D2ZJCn7JfIzVSLQUZiVKuqG3HVSgJtoPUEsOqUIXdSR4mdrNHq1XOIdFIBZeWtcorbKKcku8aHC63Ad39BrJmvrw?type=png)](https://mermaid.live/edit#pako:eNq9VE1v2zAM_SuEzolTBGsPPvS0YsPQLzS51UPByHSsxZZUiUpaBPnvo2O3QFsMaLqtPlmPNN_jM6mt0q4klatI94mspq8GlwHbwoI8HgMbbTxahkVwm0jhbUDAdYf3kSFtfHra4zlcX83mUDP7mE8mkVNpKGY6ZjU10diVySozoQdsfUPo_cTS5s46pr4cajZrZHpm6cD-fSwcA1sONxS9s5FgY7gGrgle1JR6ERqnkY0bhJb0pvafOvh2dlADHdlh6r_PL86hdDq1xP9ZXYvGSvhAgZ2h8hFUpqHPEPjrA_p-4BpnOhjP75F5KX8JglnWDK6C50JzKTQcILJMeQR6IJ3Y2OVrlm5zBEPhI9a1TNg-YXZ1CVVw7f70b70pkVG8eRrh97pzu4VC9twyWS5ULof9wBnpDeNjoUaCSGnqY9Oj6Zfx0cl4elwo2I0gyzL4-fdu9jYOJmlsmgXqFVTJ6m4nex8D2ZJCn7JfIzVSLQUZiVKuqG3HVSgJtoPUEsOqUIXdSR4mdrNHq1XOIdFIBZeWtcorbKKcku8aHC63Ad39BrJmvrw)

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Response with the /exampleapp/notes location
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML documet
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-06-25" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes