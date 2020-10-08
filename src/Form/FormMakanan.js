import React, { Component, createRef } from 'react';

class FormMakanan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pesanan: "",
      jumlah: 0,
    }

    this.hendleChange = this.hendleChange.bind(this)
    this.hendleSubmit = this.hendleSubmit.bind(this)
    this.hendleChangeJumlah = this.hendleChangeJumlah.bind(this)
    this.pesanan = createRef()
  }

  hendleChange(e) {
    this.setState({ pesanan: e.target.value })
  }

  hendleChangeJumlah(e) {
    this.setState({ jumlah: parseInt(e.target.value) })
  }

  hendleSubmit(e) {
    e.preventDefault()
    alert(
      "Pesanan Anda adalah : " +
      this.state.pesanan +
      " | Jumlah Pesanan : " +
      this.state.jumlah
    )
    this.setState({ pesanan: "", jumlah: "" })
    this.pesanan.current.focus()
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.hendleSubmit}>
            <input
              onChange={this.hendleChange}
              type="text"
              value={this.state.pesanan}
              ref={this.pesanan}
              placeholder="Masukan Pesanan Anda"
            />
            <input
              type="number"
              value={this.state.jumlah}
              onChange={this.hendleChangeJumlah}
              placeholder="Masukan Jumlah Pesanan"
            />
            <br /> <br />
            <input type="submit" value="Pesan" />
          </form>

        </center>
      </div>
    );
  }
}

export default FormMakanan;
