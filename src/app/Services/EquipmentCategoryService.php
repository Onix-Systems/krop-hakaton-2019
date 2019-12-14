<?php


namespace App\Services;

use App\Exceptions\Api\NotFound;
use App\Models\Equipments;

class EquipmentCategoryService extends AppService
{
    /**
     * @return array
     * @throws NotFound
     */
    public function getCategory()
    {
        $data = Equipments::query()
            ->select(['diagnostic_subgroup', 'diagnostic_type'])
            ->orderBy('diagnostic_subgroup')
            ->get();

        if (!count($data)) {
            throw new NotFound('Not found category!');
        }

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
     * @throws NotFound
     */
    public function getCategoryByType(string $type)
    {
        $data = Equipments::query()
            ->where('diagnostic_type', 'ILIKE', '%' . strtolower($type) . '%')
            ->orderBy('diagnostic_type')
            ->get();

        if (!count($data)) {
            throw new NotFound('Not found category!');
        }

        return $data;
    }
}
