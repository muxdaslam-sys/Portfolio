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
    public partial class UserRegistration : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(@"server=PREMIER\SQLEXPRESS; database=asp;integrated security=true");
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string photo ="~/images/"+FileUpload1.FileName;
            FileUpload1.SaveAs(Server.MapPath(photo));
            string gender = RadioButtonList1.SelectedItem.Text;
            string state = DropDownList1.SelectedItem.Text;
            string qualification = "";
            foreach (ListItem item in CheckBoxList1.Items)
            {
                if(item.Selected)
                {
                    qualification += item.Text+ ",";
                }
            }
            qualification = qualification.TrimEnd(',');

            string ins = "insert into UserReg values('" + TextBox1.Text + "','" + TextBox2.Text + "','" + TextBox3.Text + "','" + TextBox4.Text + "','" + TextBox5.Text + "','"+gender+ "','" + state + "','" + qualification + "','"+ photo + "','" + TextBox6.Text + "','" + TextBox7.Text + "')";
            SqlCommand cmd = new SqlCommand(ins,con);
            con.Open();
            int n = cmd.ExecuteNonQuery();
            con.Close();
            if(n==1)
            {
                lbl1.Visible = true;
                lbl1.Text = "inserted";
            }
        }
    }
}