import path from 'node:path';
import {pathToFileURL} from 'node:url';
const skill='C:/Users/agent/.codex/plugins/cache/openai-primary-runtime/presentations/26.1009.11318/skills/presentations';
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const result=await finalizePresentation({workspaceDir:'C:/Users/agent/OneDrive/Pictures/AstroHack/Skyntists',candidatePath:'C:/Users/agent/OneDrive/Pictures/AstroHack/Skyntists/.presentation-build/staging/candidate.pptx',finalPath:'C:/Users/agent/OneDrive/Pictures/AstroHack/Skyntists/Entregables/presentacion_validada.pptx',pythonExecutable:'C:/Users/agent/anaconda3/python.exe',integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','6'],requiredNativeTableOwnerSlides:[6],requiredNativeChartOwnerSlides:[3],fontPolicy:{basis:'design',families:['Arial']},verifyArtifactToolImport:true,receiptPath:'C:/Users/agent/OneDrive/Pictures/AstroHack/Skyntists/.presentation-build/staging/validation.json'});
console.log(JSON.stringify(result));

