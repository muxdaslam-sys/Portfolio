using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication2
{
    public partial class r : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(@"Server=PREMIER\SQLEXPRESS; Database=asp; Integrated Security=True");
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string ins = "insert into tab1 values ('"+TextBox1.Text+"',"+TextBox2.Text + ",'"+TextBox3.Text + "')";
            SqlCommand cmd = new SqlCommand(ins, con);
            con.Open();
            int i= cmd.ExecuteNonQuery();
            con.Close();
           
                Label4.Text = "Inserted";
            
        }
    }
}