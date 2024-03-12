declare const useTypeaheadQuery: (url: string, queryParamKey: string, query: string, onTransform?: (<Data>(data: Data) => any) | undefined) => import("@tanstack/react-query").UseQueryResult<unknown, Error>;
export default useTypeaheadQuery;
