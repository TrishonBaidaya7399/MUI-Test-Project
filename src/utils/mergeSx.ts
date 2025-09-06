 import { SxProps, Theme } from '@mui/material/styles';
 import { deepmerge } from '@mui/utils';
 const normalize = (obj: any): any => {
  if (!obj || typeof obj !== 'object') return obj;
  const o: any = Array.isArray(obj) ? {} : { ...obj };
  if ('p' in o) { o.padding = o.p; delete o.p; }
  if ('pt' in o) { o.paddingTop = o.pt; delete o.pt; }
  if ('pb' in o) { o.paddingBottom = o.pb; delete o.pb; }
  if ('pl' in o) { o.paddingLeft = o.pl; delete o.pl; }
  if ('pr' in o) { o.paddingRight = o.pr; delete o.pr; }
  if ('px' in o) { o.paddingLeft = o.px; o.paddingRight = o.px; delete o.px; }
  if ('py' in o) { o.paddingTop = o.py; o.paddingBottom = o.py; delete o.py; }
  if ('m' in o) { o.margin = o.m; delete o.m; }
  if ('mt' in o) { o.marginTop = o.mt; delete o.mt; }
  if ('mb' in o) { o.marginBottom = o.mb; delete o.mb; }
  if ('ml' in o) { o.marginLeft = o.ml; delete o.ml; }
  if ('mr' in o) { o.marginRight = o.mr; delete o.mr; }
  if ('mx' in o) { o.marginLeft = o.mx; o.marginRight = o.mx; delete o.mx; }
  if ('my' in o) { o.marginTop = o.my; o.marginBottom = o.my; delete o.my; }
  for (const k of Object.keys(o)) { if (typeof o[k] === 'object') o[k] = normalize(o[k]); }
  return o;
 };
 export function mergeSx(...sx: SxProps<Theme>[]): SxProps<Theme> {
  let out: any = {};
  for (const entry of sx.flat().filter(Boolean)) {
    const obj = typeof entry === 'function' ? entry as any : entry;
    const normalized = typeof obj === 'function' ? obj : normalize(obj);
    out = deepmerge(out, normalized);
  }
  return out;
 }
 // Usage
//  import { mergeSx } from '@/utils/mergeSx';
//  <Box sx={mergeSx({ p: 2, borderRadius: 2 }, { padding: 3 })} /> 
 // single padding remains