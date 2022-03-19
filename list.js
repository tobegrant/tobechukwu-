 :root {
      --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
    }
    
    body {
      background: #111 !important;
    }

    .card-body{
      float: right;
    }
    
    .card {
      background: #222;
      border: 1px solid #dd2476;
      color: crimson;
      margin-bottom: 2rem;
      float: right;
    }
    
    .btn {
      border: 5px solid;
      border-image-slice: 1;
      background: var(--gradient) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      border-image-source:  var(--gradient) !important; 
      text-decoration: none;
      transition: all .4s ease;
    }
    
    .btn:hover, .btn:focus {
          background: var(--gradient) !important;
      -webkit-background-clip: none !important;
      -webkit-text-fill-color: #fff !important;
      border: 5px solid #fff !important; 
      box-shadow: #222 1px 0 10px;
      text-decoration: underline;
    }
