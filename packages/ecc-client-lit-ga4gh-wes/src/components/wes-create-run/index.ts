import ECCClientGa4ghWesCreateRuns from "./wes-create-run.js";

export * from "./wes-create-run.js";
export default ECCClientGa4ghWesCreateRuns;

window.customElements.define(
  "ecc-client-lit-ga4gh-wes-create-run",
  ECCClientGa4ghWesCreateRuns
);

declare global {
  interface HTMLElementTagNameMap {
    "ecc-client-lit-ga4gh-wes-create-run": ECCClientGa4ghWesCreateRuns;
  }
}
