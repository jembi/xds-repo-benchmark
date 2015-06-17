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

The benchmark tool will randomly post any file starting with 'pnr-' to the SHR. There are some default documents included. You may add more document types by just adding more files to the root directory. Note: these files must contain full MTOM headers. Also, the tool will replace any instance of '#{{docUniqueId}}', '#{{subUniqueId}}' and #{{sourcePatId}} with a unqiue OID using uuids and it will replace any instance of '#{{randomize}}' with a random uuid (this is useful for adding unique identifier for CDA segments). Use these to get documentUniqueIds, submissionSetUniqueIds and sourcePatientIds set uniquely for each request.

If you want more control on the how the load test runs you may supply your own parameters to the load test tool as follows:

`./run.sh <params>`

This tool uses the loadtest npm module, so any loadtest parameters are valid here, [see more info here](https://www.npmjs.com/package/loadtest#basic-usage).

For example:

```bash
# Execute 5 requests
./run.sh -n 5
# Execute with concurrency of 5 for 120s
./run.sh -c 5 -t 120
```