#!/bin/bash
./mock-reg-server.js &
pid=$!

node_modules/.bin/loadtest -c 5 -t 20 -p reqGenerator.js -T 'multipart/related; boundary=MIMEBoundaryurn_uuid_DCD262C64C22DB97351256303951323; type="application/xop+xml"; start="<0.urn:uuid:DCD262C64C22DB97351256303951324@apache.org>"; start-info="application/soap+xml"; action="urn:ihe:iti:2007:ProvideAndRegisterDocumentSet-b"' http://localhost:8081/openmrs/ms/xdsrepository

kill $pid