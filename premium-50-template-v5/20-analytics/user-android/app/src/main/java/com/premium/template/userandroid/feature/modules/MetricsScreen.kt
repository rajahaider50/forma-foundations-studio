package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MetricsScreen(onCreate:()->Unit){Card{Column{Text("Metrics");Text("Domain-specific metrics workflow");Button(onClick=onCreate){Text("Create")}}}}
