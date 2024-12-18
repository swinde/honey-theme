[{assign var="currency" value=$oView->getActCurrency()}]
<div class="clearfix" style="clear:both;">
    <a href="#modal_priceinfo_[{$oDetailsProduct->oxarticles__oxid->value|regex_replace:"/[^a-zA-Z0-9]/":""}]" role="button" class="btn btn-info btn-staffel freeButton" data-bs-toggle="modal" title="[{oxmultilang ident="BLOCK_PRICE"}]">[{oxmultilang ident="BLOCK_PRICE"}]</a>
</div>

<div class="modal fade" id="modal_priceinfo_[{$oDetailsProduct->oxarticles__oxid->value|regex_replace:"/[^a-zA-Z0-9]/":""}]">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <span class="h4 modal-title">[{oxmultilang ident="BLOCK_PRICE"}]</span>
                <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <dl class="dl-horizontal">
                    [{foreach from=$oDetailsProduct->loadAmountPriceInfo() item=priceItem name=amountPrice}]
                        <dt class="staffel-dt">[{oxmultilang ident="FROM"}] [{$priceItem->oxprice2article__oxamount->value}] [{oxmultilang ident="PCS"}]</dt>
                        <dd class="staffel-dd">
                            [{if $priceItem->oxprice2article__oxaddperc->value}]
                                [{$priceItem->oxprice2article__oxaddperc->value}]% [{oxmultilang ident="DISCOUNT"}]
                            [{else}]
                                [{block name="details_productmain_price"}]
                                    [{if $oView->isVatIncluded()}]
                                        <strong>[{$priceItem->fbrutprice}] [{$currency->sign}]</strong>
                                        [{if $oDetailsProduct->getUnitName() and $priceItem->fbrutamountprice}]
                                            &nbsp;([{$priceItem->fbrutamountprice}] [{$currency->sign}] / [{$oDetailsProduct->getUnitName()}])
                                        [{/if}]
                                    [{else}]
                                        <strong>[{$priceItem->fnetprice}] [{$currency->sign}]</strong>
                                        [{if $oDetailsProduct->getUnitName() and $priceItem->fnetamountprice}]
                                            &nbsp;([{$priceItem->fnetamountprice}] [{$currency->sign}] / [{$oDetailsProduct->getUnitName()}])
                                        [{/if}]
                                    [{/if}]
                                [{/block}]
                            [{/if}]
                        </dd>
                    [{/foreach}]
                </dl>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">[{oxmultilang ident="CLOSE"}]</button>
            </div>
        </div>
    </div>
</div>


