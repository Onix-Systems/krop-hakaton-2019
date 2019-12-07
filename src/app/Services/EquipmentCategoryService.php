<?php


namespace App\Services;


use App\Models\FileTable;

class EquipmentCategoryService extends AppService
{
    /**
     * @return array
     */
    public function getCategory()
    {
        $data = FileTable::query()
            ->select(['diagnostic_subgroup', 'diagnostic_type'])
            ->orderBy('diagnostic_subgroup')
            ->get();

        return $this->buildTree($data);
    }

    /**
     * @param $data
     * @return array
     */
    protected function buildTree($data)
    {
        $listCategories = [];
        foreach ($data as $key => $value) {
            $listCategories[trim($value['diagnostic_subgroup'])][$value['diagnostic_type']] = $value['diagnostic_type'];
        }
        $listCategoriesResult = [];
        foreach ($listCategories as $key => $value) {
            $listCategoriesResult[] = [
                'name' => $key,
                'list' => array_values($value)
            ];
        }
        return $listCategoriesResult;
    }

    /**
     * @param string $type
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getCategoryByType(string $type)
    {
        return FileTable::query()
            ->where(['diagnostic_type' => $type])
            ->orderBy('diagnostic_type')
            ->get();
    }
}
