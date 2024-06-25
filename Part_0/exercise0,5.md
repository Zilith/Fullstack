[![](https://mermaid.ink/img/pako:eNq1VD1PwzAQ_Ssnz22KKmDIwAQCIT6GdiMMh3NpTBPb2OcCqvrfueCIARY-iiffu_O756ezt0q7mlSpIj0lsppODa4C9pUFWR4DG208WoaH4J4jha8JATcDnjNj2fTkJOMlnJ8toWX2sZzNIqfaUCx0LFrqorFrUzRmRi_Y-47Q-1n0mIlQs9kg0wf_AOb9VNjHPiVcLK-voHY69cS5qKYvZ_ejrUdjJR1_JpBbAjkEjenonwWKecXjL-Rd4gYXOhjP31F54wQKZtUyuAY-iJZCNAYQWQYkAr2QTmzs6nOXYegEQ-lHrFuKuWBxewNNcP17tF9rauTBG2d_5s7dFip5IpbJcqVKCd7nzcjdML5WaiKIUFPOzQ_mh9OD4-n8qFKwm0BRFHD_dzezjaNJGrvuAfUammSF0dnsYyBbU8glViijmqiegoxsLa97O_SqlCT7UWqNYV2pyu6kDhO7xavVquSQaKKCS6tWlQ12UaLkhwuO_8KI7t4AO0d3xw?type=png)](https://mermaid.live/edit#pako:eNq1VD1PwzAQ_Ssnz22KKmDIwAQCIT6GdiMMh3NpTBPb2OcCqvrfueCIARY-iiffu_O756ezt0q7mlSpIj0lsppODa4C9pUFWR4DG208WoaH4J4jha8JATcDnjNj2fTkJOMlnJ8toWX2sZzNIqfaUCx0LFrqorFrUzRmRi_Y-47Q-1n0mIlQs9kg0wf_AOb9VNjHPiVcLK-voHY69cS5qKYvZ_ejrUdjJR1_JpBbAjkEjenonwWKecXjL-Rd4gYXOhjP31F54wQKZtUyuAY-iJZCNAYQWQYkAr2QTmzs6nOXYegEQ-lHrFuKuWBxewNNcP17tF9rauTBG2d_5s7dFip5IpbJcqVKCd7nzcjdML5WaiKIUFPOzQ_mh9OD4-n8qFKwm0BRFHD_dzezjaNJGrvuAfUammSF0dnsYyBbU8glViijmqiegoxsLa97O_SqlCT7UWqNYV2pyu6kDhO7xavVquSQaKKCS6tWlQ12UaLkhwuO_8KI7t4AO0d3xw)

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML documet
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-06-25" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes