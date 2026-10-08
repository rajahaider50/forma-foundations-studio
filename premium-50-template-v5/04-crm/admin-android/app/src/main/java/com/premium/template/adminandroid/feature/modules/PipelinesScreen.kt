package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PipelinesScreen(onCreate:()->Unit){Card{Column{Text("Pipelines");Text("Domain-specific pipelines workflow");Button(onClick=onCreate){Text("Create")}}}}
