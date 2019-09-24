<?php
/**
 * Created by PhpStorm.
 * @author Alexander Danilin <danilin2010@yandex.ru>
 * Date: 24.07.2019
 * Time: 0:06
 */

namespace local\Services\ResourcePlan;

use Bitrix\Main\Loader;
use CIBlockElement;

class Model
{

    private $iblockId=50;

    /**
     * SeoLinkGenerate constructor.
     */
    public function __construct()
    {
        Loader::includeModule('iblock');
    }

    public function getList($productId=0){
        $result=[];
        $arSelect = [
            "ID",
            "NAME",
            "IBLOCK_ID",
            "IBLOCK_TYPE",
            "PROPERTY_PRODUKT",
            "PROPERTY_PRODUKT.NAME",
        ];
        $arFilter = ["IBLOCK_ID"=>$this->iblockId, "ACTIVE"=>"Y"];
        if($productId>0)
            $arFilter["PROPERTY_PRODUKT"]=$productId;
        $res = CIBlockElement::GetList(["SORT"=>"ASC","NAME"=>"ASC"], $arFilter, false, false, $arSelect);
        while($ob = $res->GetNext()){
            $result[]=[
                "ID"=>$ob["ID"],
                "NAME"=>$ob["NAME"],
                "PRODUCT_ID"=>$ob["PROPERTY_PRODUKT_VALUE"],
                "PRODUCT_NAME"=>$ob["PROPERTY_PRODUKT_NAME"],
            ];
        }
        return $result;
    }

    public function getIdByName($name){
        $arSelect = [
            "ID",
            "NAME",
            "IBLOCK_ID",
            "IBLOCK_TYPE",
        ];
        $arFilter = ["IBLOCK_ID"=>$this->iblockId, "ACTIVE"=>"Y","NAME"=>$name];
        $res = CIBlockElement::GetList(["SORT"=>"ASC","NAME"=>"ASC"], $arFilter, false, ['nTopCount'=>1], $arSelect);
        if($ob = $res->GetNext())
            return $ob["ID"];
        return false;
    }

}