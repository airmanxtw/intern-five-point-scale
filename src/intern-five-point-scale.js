import { LitElement, css, html } from "lit";
// import litLogo from "./assets/lit.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class InternFivePointScale extends LitElement {
  static styles = css`
    table {
      border-collapse: collapse;
      width: 100%;
    }

    table,
    th,
    td {
      border: 1px solid #000;
      text-align: center;
    }
  `;

  static get properties() {
    return {
      /**
       * The number of times the button has been clicked.
       */
      data: { type: Array },
      data2: { type: Array },
    };
  }

  constructor() {
    super();
    this.data=[];
    this.data2=[];

  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th rowspan="2">題目</th>
            <th rowspan="2">問卷題目</th>
            <th colspan="2">非常滿意</th>
            <th colspan="2">滿意</th>
            <th colspan="2">普通</th>
            <th colspan="2">不滿意</th>
            <th colspan="2">非常不滿意</th>
            <th rowspan="2">平均分數</th>
          </tr>
          <tr>
            ${[5, 4, 3, 2, 1].map(
              (_) => html`
                <th>份數</th>
                <th>百分比</th>
              `,
            )}
          </tr>
        </thead>
        <tbody>
          ${this.data.map(
            (item, index) => html`
              <tr>
                <td>${item.qno}</td>
                <td>${item.qtext}</td>
                ${[5, 4, 3, 2, 1].map(
                  (n) => html`
                    <td>${item.fives.filter((f) => f == n).length}</td>
                    <td>${((item.fives.filter((f) => f == n).length / item.fives.length) * 100).toFixed(2)}%</td>
                  `,
                )}
                <td>${(item.fives.reduce((a, b) => a + b, 0) / item.fives.length).toFixed(2)}</td>
              </tr>
            `,
          )}
        </tbody>
      </table>

      <table style="margin-top: 20px;">
        <thead>
          <tr>
            <th rowspan="2">題目</th>
            <th rowspan="2">問卷題目</th>
            <th colspan="2">視訊訪談</th>
            <th colspan="2">實地訪談</th>
            <th colspan="2">電話訪談</th>
            <th colspan="2">電子郵件</th>
          </tr>
          <tr>
            ${['視訊訪談', '實地訪談', '電話訪談', '電子郵件'].map(
              (_) => html`
                <th>份數</th>
                <th>百分比</th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${this.data2.map(
            (item, index) => html`
              <tr>
                <td>${item.qno}</td>
                <td>${item.qtext}</td>
                ${['視訊訪談', '實地訪談', '電話訪談', '電子郵件'].map(
                  (m) => html`
                    <td>${item.answers.filter(a => a == m).length}</td>
                    <td>
                      ${((item.answers.filter(a => a == m).length / item.answers.length) * 100).toFixed(2)}%
                    </td>
                  `)}
              </tr>
            `,
          )}
        </tbody>
      </table>
    `;
  }

}

window.customElements.define("intern-five-point-scale", InternFivePointScale);
