package com.medicheck.mapper;

import com.medicheck.dto.medicine.ScanResponse;
import com.medicheck.entity.MedicineScan;
import org.springframework.stereotype.Component;

@Component
public class MedicineMapper {

    public ScanResponse toScanResponse(MedicineScan scan) {
        if (scan == null) return null;

        return ScanResponse.builder()
                .brandName(scan.getBrandName())
                .genericName(scan.getGenericName())
                .confidence(scan.getConfidence() != null ? scan.getConfidence().doubleValue() : 0.0)
                .build();
    }
}