<?php


namespace App\Services;


use App\Models\Equipments;

class FiltersService extends AppService
{
    public function getAvailableFilters() {

        $equipments = Equipments::query()
            ->select([
                'address_locality',
                'custodian_name',
                'diagnostic_subgroup',
                'diagnostic_type',
                'work_shedule'
            ])
            ->where('work_shedule', '!=', 'null')
            ->where('work_shedule', '!=', ' null')
            ->get();

        $custodians = $equipments
            ->unique('custodian_name')
            ->map(function ($item) {return $item['custodian_name'];})
            ->sort()
            ->values();

        $diagnosticTypes = $equipments
            ->unique('diagnostic_type')
            ->map(function ($item) {return $item['diagnostic_type'];})
            ->sort()
            ->values();

        $filters = [
            'address_locality' => $equipments
                ->unique('address_locality')
                ->map(function ($item) {return $item['address_locality'];})
                ->values(),
            'q' => $custodians->concat($diagnosticTypes),
            'diagnostic_subgroup' => $equipments
                ->unique('diagnostic_subgroup')
                ->map(function ($item) {return $item['diagnostic_subgroup'];})
                ->sort()
                ->values(),
            'diagnostic_type' => $diagnosticTypes,
            'work_schedule' => $equipments
                ->unique('work_shedule')
                ->map(function ($item) {return $item['work_shedule'];})
                ->sort()
                ->values(),
        ];

        return $filters;
    }
}
