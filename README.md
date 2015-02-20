SHR Benchmark Tool
==================

A simple benchmark tool for the SHR.

Usage
-----

Install node.js for you platform, then run.

`npm install`

The benchmark tool comes with a mock xds regository server. It runs on `http://localhost:8282/` and will respond for any path. Configure your SHR to point to this registry.

Run the test suite:

`npm test`

The benchmark tool will radonly post any file starting with 'pnr-' to the SHR. You may add more docuemnt type but just adding more files to the root directory. Note: these files must contain full MTOM headers. Also, the tool will replace any instance of '#{{docUniqueId}}' and '#{{subUniqueId}}' with a unqiue OID using uuids. Use this to get documentUniqueIds and submissionSetUniqueIds replaced for each request.