<?php


namespace App\Http\Requests\Api;


use Illuminate\Foundation\Http\FormRequest;

class SearchRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'q' => 'string|min:3',
            'diagnostic-subgroup' => 'string|min:15',
            'diagnostic-type' => 'string|min:8',
            'work-shedule' => 'string|min:8',
        ];
    }
}
