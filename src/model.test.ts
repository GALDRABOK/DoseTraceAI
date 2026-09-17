import {test} from 'node:test';
import assert from 'node:assert/strict';
import {patients,confidence,needsReview,status} from './model.ts';
test('Persistent signals score 87; stable and isolated anomalies stay below threshold',()=>{assert.equal(confidence(patients[0]),87);assert.ok(confidence(patients[1])<20);assert.ok(confidence(patients[3])<70)});
test('Missing, conflicting, and alternative evidence lowers confidence',()=>{for(const i of [4,5,6,7])assert.ok(confidence(patients[i])<confidence(patients[0]))});
test('Threshold directly determines review eligibility',()=>{assert.ok(needsReview(patients[0],70,[]));assert.equal(needsReview(patients[0],90,[]),false)});
test('Saved review determines current status and removes pending item',()=>{const r=[{id:'test',patientId:patients[0].id,date:'2026-09-17',status:'Monitoring',note:'Verify access',actions:['Check medication access'],confidence:87}];assert.equal(needsReview(patients[0],70,r),false);assert.equal(status(patients[0],70,r),'Monitoring')});
