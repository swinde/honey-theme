[{block name="user_checkout_registration"}]

    [{capture assign="sValidationJS"}]
        [{strip}]
            $('input,select,textarea').not('[type=submit]').jqBootstrapValidation(
                {
                    filter: function()
                    {
                        return $(this).is(':visible');
                    }
                }
            );
        [{/strip}]
    [{/capture}]

    [{oxscript add=$sValidationJS}]

    [{assign var="aErrors" value=$oView->getFieldValidationErrors()}]

    <form class="form-horizontal js-oxValidate" action="[{$oViewConf->getSslSelfLink()}]" name="order" method="post" role="form" novalidate="novalidate">
        [{block name="user_checkout_registration_form"}]
            <div class="hidden">
                [{$oViewConf->getHiddenSid()}]
                [{$oViewConf->getNavFormParams()}]
                <input type="hidden" name="cl" value="user">
                <input type="hidden" name="option" value="3">
                [{if !$oxcmp_user->oxuser__oxpassword->value}]
                    <input type="hidden" name="fnc" value="createuser">
                [{else}]
                    <input type="hidden" name="fnc" value="changeuser">
                    <input type="hidden" name="lgn_cook" value="0">
                [{/if}]
                <input type="hidden" id="reloadAddress" name="reloadaddress" value="">
                <input type="hidden" name="blshowshipaddress" value="1">
            </div>

            [{block name="user_checkout_registration_next_step_top"}]
                <div class="card bg-light cart-buttons">
                    <div class="card-body">
                        <a href="[{oxgetseourl ident=$oViewConf->getBasketLink()}]" class="btn btn-outline-dark prevStep submitButton largeButton" id="userBackStepTop">[{oxmultilang ident="PREVIOUS_STEP"}]</a>
                    </div>
                </div>
            [{/block}]

            <div class="checkoutCollumns clear">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">[{oxmultilang ident="ACCOUNT_INFORMATION"}]</h3>
                    </div>
                    <div class="card-body">
                        [{include file="form/fieldset/user_account.tpl"}]
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">[{oxmultilang ident="BILLING_ADDRESS"}]</h3>
                    </div>
                    <div class="card-body">
                        [{include file="form/fieldset/user_billing.tpl" noFormSubmit=true blSubscribeNews=false blOrderRemark=true}]
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">[{oxmultilang ident="SHIPPING_ADDRESS"}]</h3>
                    </div>
                    <div class="card-body">
                        [{block name="user_checkout_registration_shipping_address_body"}]
                            <div class="form-group">
                                <div class="col-lg-9 offset-lg-3">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="blshowshipaddress" id="showShipAddress" [{if !$oView->showShipAddress()}]checked[{/if}] value="0"> [{oxmultilang ident="USE_BILLINGADDRESS_FOR_SHIPPINGADDRESS"}]
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div id="shippingAddress" [{if !$oView->showShipAddress()}]style="display: none;"[{/if}]>
                                [{include file="form/fieldset/user_shipping.tpl" noFormSubmit=true}]
                            </div>

                            [{include file="form/fieldset/order_remark.tpl" blOrderRemark=true}]
                        [{/block}]
                    </div>
                </div>
            </div>

            [{oxscript add="$('#showShipAddress').change( function() { $('#shippingAddress').toggle($(this).is(':not(:checked)'));});"}]

            [{block name="user_checkout_registration_next_step_bottom"}]
                <div class="card bg-light cart-buttons">
                    <div class="card-body">
                        <div class="row">
                            <div class="col col-md-6">
                                <a href="[{oxgetseourl ident=$oViewConf->getBasketLink()}]" class="btn btn-outline-dark float-left prevStep submitButton largeButton" id="userBackStepBottom">[{oxmultilang ident="PREVIOUS_STEP"}]</a>
                            </div>
                            <div class="col col-md-6 text-right">
                                <button id="userNextStepBottom" class="btn btn-primary pull-right submitButton largeButton nextStep" name="userform" type="submit">[{oxmultilang ident="CONTINUE_TO_NEXT_STEP"}]</button>
                            </div>
                        </div>
                    </div>
                </div>
            [{/block}]
        [{/block}]
    </form>
    [{include file="form/fieldset/delete_shipping_address_modal.tpl"}]
[{/block}]
