SHR Benchmark Tool
==================

A simple benchmark tool for the an xds.b repository.

Usage
-----

Install node.js for your platform, then run.

`npm install`

The benchmark tool comes with a mock xds regository server. It runs on `http://localhost:8282/` and will respond at any path. Configure your SHR to point to this registry.

Run the test suite:

`npm test`

The benchmark tool will radonly post any file starting with 'pnr-' to the SHR. There are some defualt docuemnts included. You may add more document types by just adding more files to the root directory. Note: these files must contain full MTOM headers. Also, the tool will replace any instance of '#{{docUniqueId}}', '#{{subUniqueId}}' and #{{sourcePatId}} with a unqiue OID using uuids. Use this to get documentUniqueIds, submissionSetUniqueIds and sourcePatientIds replaced for each request.
