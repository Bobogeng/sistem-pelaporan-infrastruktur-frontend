import styled from 'styled-components';

const StyledTambah = styled.div``;

function Tambah() {
  <StyledTambah>
    <div className="container">
      <form action="" className="tambah">
        <div className="form__part">
          <label htmlFor="judul">text</label>
          <input type="text" name="judul" />
        </div>
        <div className="form__part">
          <label htmlFor="deskripsi">Deskripsi Berita</label>
          <textarea name="deskripsi" id="deskripsi"></textarea>
        </div>
        <div className="form__part">
          <label htmlFor="foto">Foto</label>
          <input type="image" name="foto"></input>
        </div>
      </form>
    </div>
  </StyledTambah>;
}

export default Tambah;
