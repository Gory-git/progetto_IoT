              <table width="100%" border="0">
                <tr>
                  <td width="30%"><script type="text/javascript">Capture(share.usrname)</script></td>
                  <td><input name="ppp_username" id="ppp_username" size="25" maxlength="63"  value="" /></td>
                </tr>
                <tr>
                  <td width="30%"><script type="text/javascript">Capture(share.passwd)</script></td>
                  <td><span id="ppp_pass"><input name="ppp_passwd" id="ppp_passwd" size="25" maxlength="63"  type="password" value="" /></span>
                  &nbsp;<input type="checkbox" name="wpa_key_unmask" value="0" onClick="unmask(this.checked,'ppp_pass','ppp_passwd','ppp_passwd' );" >
                            <script type="text/javascript">Capture(share.unmask)</script>
                   </td>
                </tr>
                <tr class="off">
                  <td width="30%"><script type="text/javascript">Capture(share.srv)</script></td>
                  <td><input name="ppp_service" id="ppp_service" size="25" maxlength="63"  value="" /></td>
                </tr>
              </table>