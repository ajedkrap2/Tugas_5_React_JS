import React from 'react';

import FormMakanan from "../Form/FormMakanan"
import DaftarMakanan from "../Lib/DaftarMakanan"

const ListMakanan = [
  {
    NamaMakanan: "Nasi Padang",
    Harga: "20.000"
  },
  {
    NamaMakanan: "Sate",
    Harga: "20.000"
  },
  {
    NamaMakanan: "Soto",
    Harga: "10.000"
  },
  {
    NamaMakanan: "Uduk",
    Harga: "10.000"
  },
  {
    NamaMakanan: "Nasi Kuning",
    Harga: "15.000"
  },
  {
    NamaMakanan: "Ayam Geprek",
    Harga: "15.000"
  },
  {
    NamaMakanan: "Pecel Lele",
    Harga: "15.000"
  },
  {
    NamaMakanan: "Pecel",
    Harga: "10.000"
  },
  {
    NamaMakanan: "Mie Ayam",
    Harga: "10.000"
  }
]

class MenuMakanan extends React.Component {

  render() {
    return (
      <div>
        <h3>Daftar Makanan Favourite</h3>
        <table>
          <tbody>
            <tr>
              {DaftarMakanan.map((data, index) => {
                return (
                  <td key={index}>
                    <img
                      src={data.img}
                      alt="Product Makanan"
                      width="150"
                      height="100"
                    />
                    <center>
                      <p>{data.NamaMakanan}</p>
                      <p>Harga : {data.Harga}</p>
                    </center>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
        <h4>List Makanan</h4>
        {
          ListMakanan.map((data, index) => {
            return (
              <div key={index}>
                <p>
                  {data.NamaMakanan + " | Harga Rp. " + data.Harga}
                </p>
              </div>
            )
          })
        }
        <FormMakanan />
      </div>
    );
  }
}


export default MenuMakanan;
