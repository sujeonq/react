export default function Terms() {
  return (
    <section className="terms">
      <h2 className="tit">사이트 이용약관</h2>
      <table border="1">
        <tr>
          <td>
            <textarea name="terms">약관내용</textarea>
            <label>
              <input type="checkbox" className="terms" />
              &nbsp;동의합니다.
            </label>
          </td>
        </tr>
      </table>
      <h2 className="tit">개인정보 취급방침</h2>
      <table border="1">
        <tr>
          <td>
            <textarea name="privacy">약관내용</textarea>
            <label>
              <input type="checkbox" className="privacy" />
              &nbsp;동의합니다.
            </label>
          </td>
        </tr>
      </table>
      <div>
        <a href="./login.html" className="btn btnCancel">
          취소
        </a>
        <a href="./register.html" className="btn btnNext">
          다음
        </a>
      </div>
    </section>
  );
}
